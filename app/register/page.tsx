export default function Register() {
  return (
    <div className="auth-page">
     <form action="auth-card">
        <h1>สมัครสมาซิก</h1>
        <input placeholder="ชื่อผู้ใช้" />
        <input placeholder="อีเมล" />
        <input placeholder="รหัส" type="Password" />

        <button> สมัคร </button>
     </form>
      
      
    </div>
  );
}