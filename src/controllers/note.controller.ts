import { Request, Response } from "express";
import { User, Note } from "../entities/";

interface NoteBody {
  userid: number;
  title: string;
  description: string;
}

interface NoteFilter {
  limit?: string;
  pageSize?: string;
  page?: string;
}

export const getNotes = async (req: Request<NoteFilter>, res: Response) => {
  try {
    const { limit, page, pageSize } = req.params;
    const filter = {};

    const notes = await Note.find(filter);
    return res.json(notes);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const note = await Note.findOneBy({ id: parseInt(id) });

    if (!note) return res.status(404).json({ message: "Note not found" });

    return res.json(note);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getUserNotes = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const note = await User.find({ 
      relations: {
        notes: true,
      },
      where: {
        id: parseInt(id),
      }
     });

    if (!note) return res.status(404).json({ message: "Note not found" });

    return res.json(note);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createNote = async (
  req: Request<unknown, unknown, NoteBody>,
  res: Response
) => {
  try {
    const { title, description, userid } = req.body;
    const user = await User.findOneBy({ id: userid });
    if (!user) return res.status(404).json({ message: "User not found" });

    const note = new Note();
    note.title = title;
    note.description = description;
    note.user = user;
    await note.save();
    return res.json(note);
    
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }   
  }
};

export const updateNote = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const note = await Note.findOneBy({ id: parseInt(id) });
    if (!note) return res.status(404).json({ message: "Note not found" });

    await Note.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Note.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "Note not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};