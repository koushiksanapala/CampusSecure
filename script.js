// ✅ Handle "Report Issues" form submission
const form = document.querySelector("#complaint-form");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get all input fields
    const name = form.querySelector("input[type='text']").value.trim();
    const issueType = form.querySelector("select").value.trim();
    const description = form.querySelector("textarea").value.trim();

    if (!issueType || issueType === "-- Select Issue Type --" || !description) {
      alert("⚠️ Please fill in all the required fields before submitting.");
      return;
    }

    const data = { name, issueType, description };

    try {
      const response = await fetch("http://localhost:5050/api/reports", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("✅ Issue submitted successfully!");
        form.reset();
      } else {
        alert("❌ Error submitting issue. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Cannot connect to the server. Make sure backend is running.");
    }
  });
}
