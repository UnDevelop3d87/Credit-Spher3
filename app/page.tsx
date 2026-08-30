export default function Page() {
  return (
    <main style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',backgroundColor:'#020617',color:'#fff',padding:0}}>
      <div style={{textAlign:'center'}}>
        <img src="/logo.svg" alt="Credit Sphere" className="logo" style={{marginBottom:24}} />
        <h1 style={{margin:'8px 0'}}>Credit Sphere</h1>
        <p>Welcome — deploy ready with Vercel skeleton and responsive assets.</p>
      </div>
    </main>
  );
}
