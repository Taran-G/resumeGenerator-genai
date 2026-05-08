const Loader = () => (
  <div style={{display:'flex',flexDirection:'column',
    alignItems:'center',gap:'1.5rem',padding:'2rem 0'}}>
    <div style={{
      width:'44px', height:'44px',
      borderRadius:'50%',
      border:'3px solid #e5e7eb',
      borderTopColor:'#111',
      animation:'spin 0.8s linear infinite'
    }}/>
    <span style={{fontSize:'14px',opacity:.5}}>
      Loading...
    </span>
  </div>
);

export default Loader
/* Add to your index.css:
@keyframes spin { to { transform: rotate(360deg); } } */