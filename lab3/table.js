/**
 * buildTableRow - takes a course and constructs the HTML table row
 * Example:
 *   course is { "number": "CS 1", "title": "CS Stuff",
 *               "prerequisites": [ "CS 0" ], "description": "Do stuff" }
 *   returned string:
 *     '<tr id="cs-1"><th><a href="course.html?cs-1">CS 1</a></th><td>CS Stuff</td><td><a href="#cs-0">CS 0</a></td></tr>'
 * Notes:
 *   All text is case-sensitive.
 *   Spaces between the HTML tags is optional. ("<th><a..." and "<th> <a..."
 *   are both okay.) If there is more than one prerequisite, each gets its own
 *   <a> tag with a space between them. If there are no prequisites, that part
 *   should be <td><em>none</em></td>. The description is not used for this
 *   function.
 */
function buildTableRow(course) {
  // YOUR CODE HERE
  let row = '';
  // number
  let number = course.number.toLowerCase().replace(' ', '-')
  row += '<tr id="' + number + '"><th><a href="course.html?' + number + '">' + course.number + '</a></th>';
  // title
  row += '<td>' + course.title + '</td>';
  // prerequisites
  row += '<td>';
  if (course.prerequisites.length > 0) {
    for (let i = 0; i < course.prerequisites.length; i++) {
      row += '<a href="#' + course.prerequisites[i].toLowerCase().replace(' ', '-') + '">' + course.prerequisites[i] + '</a>';
    }
  } else {
    row += '<em>none</em>';
  }
  row += '</td></tr>';
  return row;
}

// IMPORTANT: Do not modify or delete the next line:
(function() {

  // Step 3: Include code to filter based on text in the course description.
  // For the URL foo.html?a=b, use the window.location.search global variable
  // to get the '?a=b' substring. In this lab, if the search string is
  // '?terms=algorithm' then you should only show the courses that have the
  // word 'algorithm' in their description. For simplicity, you can do a
  // case-sensitive search so 'Algorithm' would not necessarily be matched.

  // Optional: You are only required to search based on one word at a time.
  // If the user entered more than one word, the query string would be of the
  // form '?terms=algorithm+logic'. For more practice, you can split this into
  // the two terms 'algorithm' and 'logic' and only show courses that contain
  // both.

  // YOUR CODE HERE


  // Step 1: Use document.write() to create the HTML table of all courses.
  // You will need to write both the opening and closing <table> tags, with
  // all the table rows in between. For each course in the full list (or the
  // filtered version in step 3), call buildTableRow() to get the HTML string
  // to write for that row.

  // YOUR CODE HERE


// IMPORTANT: Do not modify or delete the next line:
})();
