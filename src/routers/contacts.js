import express from 'express';
import { getAllContacts, getContactById } from '../services/contacts.js';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const contacts = await getAllContacts();

    return res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(contactId)) {
    return res.status(400).json({
      message: 'Invalid contact ID'
    });
  }

  try {
    const contact = await getContactById(contactId);

    if (!contact) {
      return res.status(404).json({
        message: 'Contact not found'
      });
    }

    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
