import React from 'react'

export default function Movies() {
    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        maxWidth: '300px',
       
        backgroundColor: '#fff',
        textAlign: 'center',
      };
    
      const imageStyle = {
        width: '100%',
        borderRadius: '8px 8px 0 0',
        marginBottom: '16px',
      };
    
      const titleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: '#333',
      };
    
      const contentStyle = {
        fontSize: '1rem',
        color: '#555',
        lineHeight: '1.5',
      };
    
      const buttonStyle = {
        marginTop: '16px',
        padding: '10px 16px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      };
    
      return (
        <div style={{display:'flex',justifyContent:'space-evenly'}}>

            <div style={cardStyle}>
            <img
                src="https://cdn.cdon.com/media-dynamic/images/product/movie/dvd/image1/avengers_endgame_sefi-47496385-.jpg"
                alt="Card Example"
                style={imageStyle}
            />
            <div style={titleStyle}>Card Title</div>
            <div style={contentStyle}>
                This card now includes an image. It’s a great way to make your content more engaging.
            </div>
            <button style={buttonStyle} onClick={() => alert('Button clicked!')}>
                Learn More
            </button>
            </div>
            <div style={cardStyle}>
            <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/169405b8-9b86-4d5f-bd58-4505c022d930/dhkig7g-5af9cc29-803f-49b1-a202-512e740ef061.jpg/v1/fill/w_873,h_915,q_70,strp/deadpool_wolverine_w_mask_edit_v2_by_cbmfan002_by_tytorthebarbarian_dhkig7g-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM0MSIsInBhdGgiOiJcL2ZcLzE2OTQwNWI4LTliODYtNGQ1Zi1iZDU4LTQ1MDVjMDIyZDkzMFwvZGhraWc3Zy01YWY5Y2MyOS04MDNmLTQ5YjEtYTIwMi01MTJlNzQwZWYwNjEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jCm3lnqCgCZiG95pKJzu0A-jMiey9cN7iZPE_DLZbp8"
                alt="Card Example"
                style={imageStyle}
            />
            <div style={titleStyle}>Card Title</div>
            <div style={contentStyle}>
                This card now includes an image. It’s a great way to make your content more engaging.
            </div>
            <button style={buttonStyle} onClick={() => alert('Button clicked!')}>
                Learn More
            </button>
            </div>
            <div style={cardStyle}>
            <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5007107c-8355-4fbe-bd9b-eddb6324332f/dcndgt3-3ffde4fa-e35b-41a7-84fd-94b8552583e9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUwMDcxMDdjLTgzNTUtNGZiZS1iZDliLWVkZGI2MzI0MzMyZlwvZGNuZGd0My0zZmZkZTRmYS1lMzViLTQxYTctODRmZC05NGI4NTUyNTgzZTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HvQWH8vSM6Ga6FwcAzW3DeZQwKdOk-jC3EMHgXaVo0I"
                alt="Card Example"
                style={imageStyle}
            />
            <div style={titleStyle}>Card Title</div>
            <div style={contentStyle}>
                This card now includes an image. It’s a great way to make your content more engaging.
            </div>
            <button style={buttonStyle} onClick={() => alert('Button clicked!')}>
                Learn More
            </button>
            </div>
            <div style={cardStyle}>
            <img
                src="https://preview.redd.it/official-poster-for-shazam-fury-of-the-gods-v0-02uqs0j639ea1.jpg?width=640&crop=smart&auto=webp&s=4c12ebeb91c3e8d8505e53e32de16a2aecb1af9b"
                alt="Card Example"
                style={imageStyle}
            />
            <div style={titleStyle}>Card Title</div>
            <div style={contentStyle}>
                This card now includes an image. It’s a great way to make your content more engaging.
            </div>
            <button style={buttonStyle} onClick={() => alert('Button clicked!')}>
                Learn More
            </button>
            </div>
        
        </div>
      );
    
}
