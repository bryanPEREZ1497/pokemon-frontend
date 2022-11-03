import React from 'react'

export default function NotFoundPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <h1
        style={{
          fontSize: '5rem',
        }}>404</h1>
      <h4>Recurso no encontrado</h4>
      <h6 className='text-muted'
      >¡El recurso solicitado no existe!
      </h6>
    </div>
  )
}
