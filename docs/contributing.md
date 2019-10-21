# Contributing Guidelines

## Project Board

Project tasks are managed through our [Trello Board](https://trello.com/b/T8aWAmQR/grace-shoppah).

## Database Documentation

We use DBDiagram as database documentation.

1. To view our tables and relationships, copy the code found in [dbdiagram.txt](./dbdiagram.txt) and paste to [DBDiagram](https://dbdiagram.io/).
2. Make sure to update dbdiagram.txt if it becomes outdated.

## Slack Channel

We discuss the project in our [Slack Channel](https://fullstackacademy.slack.com/messages/GP9JKJECQ).

## Project Update

We have Slack Standup every 6:30 PM.

## Contribution Workflow

1. Pick up a ticket from the **Ready** or the **Backlog** column.
   1. If task in the ticket is too big, break it down into smaller tickets.
   2. On the ticket that you'll be working on:
      1. Add yourself as a member to the ticket.
      2. Optionally set a due date for the ticket.
      3. Move the ticket to **In Progress**.
2. Create a descriptive branch name.

   > git checkout -b <your_branch_name>

   Remember to:

   1. Make small commits.
   2. Add _at least_ 1 test (happy path for the route).
      1. Put the test file at the same directory as the file/class/component/function under test.
      2. Name the test file **<file_under_test>.spec.js**
   3. Use JSX extension for your react components.
   4. Refer to the database documentation as guide when adding/updating models.
      1. Similarly, please update the documentation to reflect updates in our models.
      2. Include an exported PNG of the updated documentation to your branch.

3. Push your branch to Github.
4. Open a Pull Request.

   1. Move the ticket to **In Code Review**
   2. If a pair worked on the ticket, either one of the pair can just approve the Pull Request. Otherwise, drop a message in the Project Slack Channel so that another teammate can check the Pull Request.

5. Once Pull Request is approved, merge to master.
   1. Prefer to **Rebase to Master**.
   2. Move ticket to **Done**.
