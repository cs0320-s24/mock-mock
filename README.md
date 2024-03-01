> **GETTING STARTED:** You should likely start with the `/mock` folder from your solution code for the mock gearup.

# Project Details

This project is a React app that displays the front-end for a site that will eventually allow users to load, view, and search existing CSV files.

The app requires node.js to run, and by navigating to the mock directory, can be launched onto
the localhost by running

                    npm run start

Upon starting, navigate to the provided port in the local host in order to interact with the webapp.

# Design Choices

## ReplFunction

Our REPL processes and recognizes commands by keeping a regsitry of recognized commands.
These can be found in the REPLFunctions directory. The `REPLCommandRegistry` currently supports the following commands:

- `load`
- `view`
- `search`
- `mode`

See the --How To-- Section for more info on how to use these commands. Any future commands must
be added to the record as an entry "string" to REPLFunction. Each REPLFunction may return a
`string` or a `string[][]`, so any REPLFunctions must follow this convention. Additionally,
each `REPLFunction` takes in `REPLFunctionArgs`, which inlcudes Dispatches on a React State
that allow the function to set the value of a shared state for the current Mode and the latest
parsed file.

Our code is not yet integrated. Instead, we have a MockSearchResponse file that allows us to mimic the responses that we would be receiving from the API when running Search. These were retrieved
by performing actual searches in our Java Server program.

# Errors/Bugs

- When we switch from verbose to brief, it modifies the value for all of the REPLResults.

# Tests

The tests can be run using the following command:

                    npm run test

Configurations allow to run `test:unit` or `test:e2e` to isolate the respective tests.

Unit tests are created for the REPLFunctions in order to test the expected string and string[][]
outputs.

E2E tests mimic different use cases in our program, as well as ensuring that there are no unecessary side effects in using (or not using) our REPLFunctions.

# How to

Upon running (see --Program Details--) press the login button to enter your REPL account. After
logging in, the REPLInput should be visible. Start by using any of the following commands:

- <pre>load <i>filepath</i></pre>

  - this will load a CSV file into the programs state.

- <pre>view</pre>

  - this will display the CSV file in an HTML Table.

- <pre>search <i>token</i> [columnIdentifier]</pre>
  - this will search for the given in the entire file
  - given the optional columnIdentifier, either a number of column name, the search will only occur in that column and return the rows that matched the token. 

- <pre>mode {brief | verbose}</pre>
  - this can be used to alternate between brief and verbose mode. Using brief mode will only show the output given, where using verbose mode will also display the command that was run.  

# Collaboration

- [Guide used for react tables](https://www.bekk.christmas/post/2020/22/create-a-generic-table-with-react-and-typescript)

_(state all of your sources of collaboration past your project partner. Please refer to the course's collaboration policy for any further questions.)_
