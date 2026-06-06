const form = document.getElementById("studentForm");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxz12bjsnKZsIc5j9oWHuPpoIcQkW2ggrFBgza7N6XEW3YNnf6zWuETvTo_kabZUc5l/exec",
        {
            method: "POST",
            body: JSON.stringify(data)
        }
    );

    document.getElementById("result").textContent =
        "Saved Successfully";
});