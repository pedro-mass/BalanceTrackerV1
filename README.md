# BalanceTrackerV1

[Mock Up](https://ninjamock.com/s/M2WMX) | [V1 Doc](https://docs.google.com/document/d/1gmrmkgkAjpVgvJ6V99aVHv0MHc8gCWudD7LxsYWPmE4/edit?usp=sharing) | [Strides Tracker](https://my.stridesapp.com/#/tracker/target/03595251-f56c-5a62-933d-e51d3c303c29) | finish by 6/25/17

[Project Doc + future features](https://docs.google.com/document/d/1OhkVd_TcOeTCi1cv7xBFNa2n4NtmWVT_o-owZg4GOMw/edit?usp=sharing)

## Plan
- Two months to complete
- Tracked using [Strides](https://my.stridesapp.com/#/tracker/target/03595251-f56c-5a62-933d-e51d3c303c29)
  - We have 4 steps
  - Each step is worth 100pts (to represent percentage completed)
  - Update strides whenever project is worked
    - For time keeping
  - Mark what percentage of the feature we believe is completed

## Version: 1
- Login: email/pass
  - Regular firebase auth
  - Use the same approach from the Udemy course
- Simple Balance display
  - Just a text for the balance
  - Something like a button for the +/-
- Simple Increase/Decrease Balance
  - Basic input for the amount
- Simple CRUD transactions
  - Everything is a basic input

## Data Model
- Current balance
- List of transactions
  - Date time (computed on time of input)
  - Amount
  - Note (optional field)


## ToDo
- clear transactions
- add indicator to List item if it has a note
- clean up Add/Edit, so that they're using the same form
- organize state so that we're not referencing it like this: state.balance.balance
- "freeze" the save button so that they can't press it twice
- have a delete confirmation
- validation on the balance add/edit form
