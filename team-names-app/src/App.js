import React from 'react';

function App() {
  const teammates = [
    "Yeshas Krishna - Project Lead",
    "Nelson Diaz - Back-end Dev",
    "Nestor Banda - Polishing/QA Testing",
    "Alejandro Gutierrez Fiol - Front-end Dev"
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-indigo-600 px-5 py-24">
      {/* Header */}
      <header className="w-full bg-gray-900 py-6 shadow-lg">
        <h1 className="text-4xl font-bold text-center text-white">
          Blood Bank Diagnostic Dashboard
        </h1>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 w-full max-w-7xl">
        {/* Team Members Section */}
        <section className="flex flex-col items-center p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Meet Our Team</h2>
          <ul className="space-y-4 w-full">
            {teammates.map((name, index) => (
              <li
                key={index}
                className="text-xl text-white bg-gray-700 bg-opacity-70 p-4 rounded-md shadow-md hover:bg-opacity-80 transition duration-200 ease-in-out"
              >
                {name}
              </li>
            ))}
          </ul>
          <h4 className="text-lg text-white mt-10 text-center">
            Meetings every MWF from 10 A.M. to 12 P.M.<br />
            <a
              href="https://juniordiaz1059.atlassian.net/jira/software/projects/KAN/boards/1?atlOrigin=eyJpIjoiMmYzODY3OWExYTQyNDkwMmJjMGFmODBmYjIzMTM5MjAiLCJwIjoiaiJ9"
              className="underline text-blue-300">
              Project Management Board
            </a>
          </h4>
        </section>

        {/* Schedules Section */}
        <section className="flex flex-col items-center p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-6">Upcoming Schedules</h3>

          <div className="text-lg text-white space-y-6">
            <div>
              <strong>Next Development Sprint</strong><br />
              Date: September 20, 2024<br />
              Agenda: Begin to implement key features
            </div>

            <div>
              <strong>Case Studies & Quizzes Integration</strong><br />
              Date: September 15, 2024<br />
              Agenda: Adding quizzes, case studies, and assignments to the dashboard.
            </div>

            <div>
              <strong>Final Review & Testing</strong><br />
              Date: September 20, 2024<br />
              Agenda: Full system testing and user feedback collection from beta users (students and faculty).
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
