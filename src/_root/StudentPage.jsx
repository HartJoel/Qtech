import React from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/Navbar.JSX";
import AddStudentForm from "../component/AddStudentForm";

function StudentPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar — fixed on the left */}
      <Sidebar />

      {/* Right side — navbar on top, content below */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />

        {/* Page content scrolls here */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <AddStudentForm />
        </main>
      </div>
    </div>
  );
}

export default StudentPage;
