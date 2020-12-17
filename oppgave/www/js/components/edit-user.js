

import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  static get styles() {
    return css`
        p {margin-top: 20px;}
    `;
  }

 
    render() {
      return html`
        <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        </head>

        <form onsubmit ="javascript: return false;" id="editForm" method = "POST">
          <div class = "form-group" style="width: 400px;">
            <p>Username:</p>
            <input class="form-control" id="username" name="username" type="text" value="${this.user.uname}" required>
            <p>UID:</p>
            <input id="uid" name="uid" value="${this.user.uid}">
            <p>First name</p>
            <input id="firstName" name="firstName" value="${this.user.firstName}">
            <p>Last name</p>
            <input id="lastName" name="lastName" value="${this.user.lastName}">
            <p> Type your old password here</p>
            <input id="oldpwd" name="oldpwd" type="password" value="">
            <p> Type the new password </p>
            <input id="pwd" name="pwd" type="password" value="">
          </div>
          <input type="submit" @click=${this.updateUser} id="submitForm" name="editUser" class="btn" value="Click me to edit the user now!"></input>
          </form>
      `;

    }

      // this function updates the information about a user
  updateUser(e) {
    //retrieve data from HTML form
    const dataForm = new FormData(e.target.form);
    console.log(e)
    fetch('api/updateUser.php', {
     method: 'POST',
     body: dataForm
    }).then(res=>res.json())
      .then(data=>{
        if (data.status=='success') {
            console.log("The user was updated");
        } else {
            console.log("The user was not updated");
        }
      })
  }

}
customElements.define('edit-user', EditUser);
