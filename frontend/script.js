const form = document.querySelector("#complaint-form");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const issueType = form.querySelector("select").value.trim();
    const description = form.querySelector("textarea").value.trim();

    if (!issueType || !description) {
      alert("⚠️ Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5501/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, issueType, description }),
      });

      if (response.ok) {
        alert("✅ Report submitted successfully!");
        form.reset();
      } else {
        alert("❌ Error submitting report");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Backend not running. Start Node server first.");
    }
  });
}
