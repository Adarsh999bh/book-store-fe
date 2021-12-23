/* ************************************************************************
 * Execution        : 1. default node  cmd> node  index.js              
 * @descrition      : set up the react server 
 * @file            : server.js
 * @author          : Adarsh Bhandary
 * @version         : 1.0
 * @since           : 8-Dec-2021
 * 
 **************************************************************************/
export const validFirstName = new RegExp("^[A-Z][a-zA-Z]{2,}");
export const validLastName = new RegExp("^[A-Z][a-zA-Z]{2,}");
export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]{1,256}@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validPassword = new RegExp("^[a-zA-Z0-9@#$%^&*()!~]{8,}$");