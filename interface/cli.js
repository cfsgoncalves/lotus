import { Command, program } from "commander";
import logger from "../utils/logger";

class CLI {
  constructor() {
    this.program = new Command();
    this.program.version("0.0.1").description("A simple CLI for managing your notes");
  }

  // Command to add a simlple note
  function addNote() {
    program.command("add <note>").description("Add a new note").action((note) => {
    
      console.log(`Adding note: ${note}`);

      logger.debug(`Adding note: ${note}`);
    });
  }

  // Function to list all notes by type
function listNotesByType() {
    program.command("list <type>").description("List all notes by type").action((type) => {
        console.log(`Listing notes of type: ${type}`);
    
        logger.debug(`Listing notes of type: ${type}`);
    }); 


  //Function to remove a note
  function removeNote() {
    program.command("remove <note>").description("Remove a note").action((note) => {
        console.log(`Removing note: ${note}`);
    
        logger.debug(`Removing note: ${note}`);
    });
  } 


  // Function to remove all nodes from a specific type
  function removeAllNotesByType() {
    program.command("remove-all <type>").description("Remove all notes by type").action((type) => {
        console.log(`Removing all notes of type: ${type}`);
    
        logger.debug(`Removing all notes of type: ${type}`);
    });
  }

}

