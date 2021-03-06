import styles from "./ConditionalRendering.module.css";

export default function ConditionalRendering() {
  const welcomeText = {
    admin: "Hi admin",
    shopManager: "Hi shop manager",
    customer: "Welcome customer",
    guest: "Welcome guest",
  };
  const user = {
    //roles admin, shopManager, customer, guest
    name: "Mauro",
    isAuthenticated: true,
    role: "admin",
  };
  const { role, name, isAuthenticated } = user;

  return (
    <div>
      <small>En este bloque hay también un ejemplo de como usar CSS Module</small>
      <h1>Conditional Rendering</h1>
      <small>Ejemplo nombre</small>
      <p className={isAuthenticated ? styles.welcomeTextAuthed : styles.welcomeText}>
        Welcome, {isAuthenticated ? name : "please log in"}
      </p>
      <small>Ejemplo Role</small>
      <p className={isAuthenticated ? styles.welcomeTextAuthed : styles.welcomeText}>
        {isAuthenticated ? welcomeText[role] : "please log in"}
      </p>
      {!isAuthenticated && <button>Login</button>}
      <br />
      
      <br />
      
    </div>
  );
}
