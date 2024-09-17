import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController, patchContactController, upsertContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactValidationSchema, updateContactValidationSchema } from '../validation/contacts.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('/contacts/:contactId', isValidId, ctrlWrapper(getContactByIdController));
router.post('/contacts', validateBody(createContactValidationSchema), ctrlWrapper(createContactController));
router.delete('/contacts/:contactId', isValidId, ctrlWrapper(deleteContactController));
router.put('/contacts/:contactId', validateBody(updateContactValidationSchema), isValidId, ctrlWrapper(upsertContactController));
router.patch('/contacts/:contactId', validateBody(updateContactValidationSchema), isValidId, ctrlWrapper(patchContactController));

export default router;
