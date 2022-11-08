# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

This approach consider that the tests are made in each phase of the development.

### 1 Create new custom id save function

- Create a new field **external hash** on the Agent model. This should be a string to accept different values, since does not have a standard format, and could be null and not unique, I'm assuming the Facilities **can** add their id's, and don't **must**.
- Add to the save function the new field **external hash**.
- Write tests.

### 2 Create getShiftsCustomIdMetadataByFacility

- Create a function that validates if some **external hash** is set on the agent, otherwise return the internal id, this function should have an unit-test.
- Create **getShiftsCustomIdMetadataByFacility**, the list should call the function that validates if some **external hash** is set.
- This should be enough to test the new feature, the next 2 commits will be to add the functionality to the UI

### 3 Add the custom id's for the generateReport function

- Finally override the **generateReport** function using, the **getShiftsCustomIdMetadataByFacility**. I'm assuming the **getShiftsByFacility** could be used on another place on the code, that's why I opt to create a new function.
- Write the tests

### 4 Add custom id submit function to UI

- Add to the user interface the new field on the form submission on **create** and **update** Agent information.