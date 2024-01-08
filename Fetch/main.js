function getUserInfo() {
    let username = document.getElementById("username").value;
    let userInfoElement = document.getElementById("userInfo");
    userInfoElement.innerHTML = "";
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        userInfoElement.innerHTML = `
          <h2>${data.name || data.login}</h2>
          <img src="${data.avatar_url}" alt="Profile Photo">
          <p><strong>Login:</strong> ${data.login}</p>
          <p><strong>Profile URL:</strong> <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
          <p><strong>Blog URL:</strong> ${data.blog || "N/A"}</p>
          <p><strong>Location:</strong> ${data.location || "N/A"}</p>
          <p><strong>Email:</strong> ${data.email || "N/A"}</p>
          <p><strong>Followers:</strong> ${data.followers}</p>
          <p><strong>Following:</strong> ${data.following}</p>
        `;
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
        userInfoElement.innerHTML = "<p>Error fetching user data. Please try again.</p>";
      });
  }