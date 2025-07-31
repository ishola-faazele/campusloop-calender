/**
 * @openapi
 * tags:
 *   name: Calendar
 *   description: Calendar operations related to events and attendees
 *
 * components:
 *   schemas:
 *     AddToCalendarRequest:
 *       type: object
 *       required:
 *         - eventId
 *         - attendeeId
 *       properties:
 *         eventId:
 *           type: string
 *           format: uuid
 *           description: The ID of the event to add to calendar
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         attendeeId:
 *           type: string
 *           format: uuid
 *           description: The ID of the user adding the event to their calendar
 *           example: "987e4567-e89b-12d3-a456-426614174999"
 *
 *     CalendarSuccessResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Event has been successfully added to calendar
 *
 *     CalendarAlreadyExistsResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Calendar Item Has Already Been Added
 *
 *     CalendarValidationError:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Invalid Calendar Inputs
 *         error:
 *           type: object
 *           description: Validation error details
 *
 *     InternalServerError:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Server Side Error
 *
 * /calendar/add:
 *   post:
 *     tags: [Calendar]
 *     summary: Add an event to a user's calendar
 *     description: Adds a specific event to an attendee's calendar, avoiding duplicates.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AddToCalendarRequest'
 *     responses:
 *       201:
 *         description: Event successfully added to calendar
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CalendarSuccessResponse'
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CalendarValidationError'
 *       409:
 *         description: Calendar item already exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CalendarAlreadyExistsResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InternalServerError'
 */

import { CalenderController } from '../controller/calender.controller';
import { Router } from 'express';

export const CreateCalenderRouter = () => {
  const calenderRouter = Router();
  const calenderController = new CalenderController();

  calenderRouter.post('/add', (req, res) => {
    calenderController.handleAddToCalender(req, res);
  });
  return calenderRouter;
};
