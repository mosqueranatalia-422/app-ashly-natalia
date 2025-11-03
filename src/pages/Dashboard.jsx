function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e293b] flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 p-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#3b82f6] text-white font-bold text-lg">
              N
            </div>
            <span className="text-xl font-semibold text-white">NombreApp</span>
          </div>

          {/* Navegación */}
          <nav className="flex flex-col mt-4 space-y-2 px-4">
            <a
              href="#"
              className="flex items-center gap-3 bg-[#334155] text-white px-3 py-2 rounded-lg"
            >
              <span>Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-[#334155]"
            >
              <span>Perfil</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-[#334155]"
            >
              <span>Configuración</span>
            </a>
          </nav>
        </div>

        {/* Logout */}
        <div className="p-6 text-gray-500 text-sm">Cerrar Sesión</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Header */}
        <header className="flex justify-between items-center border-b border-gray-700 pb-4 mb-8">
          <h1 className="text-xl font-semibold">Bienvenido de nuevo</h1>
          <div className="relative">
            <img
              src="https://i.pravatar.cc/40"
              alt="User avatar"
              className="w-10 h-10 rounded-full border-2 border-[#3b82f6]"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-[#0f172a]" />
          </div>
        </header>

        {/* Panel de control */}
        <section>
          <h2 className="text-2xl font-bold mb-1">Panel de Control</h2>
          <p className="text-gray-400 mb-8">
            Un resumen de la actividad de tu cuenta.
          </p>

          {/* Estadísticas */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { title: "Proyectos Activos", value: 12 },
              { title: "Tareas Completadas", value: 86 },
              { title: "Alertas", value: 3 },
              { title: "Miembros del equipo", value: 8 },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#1e293b] p-6 rounded-xl border border-[#334155]"
              >
                <p className="text-gray-400 text-sm">{item.title}</p>
                <p className="text-3xl font-bold mt-2">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Notificaciones y accesos */}
          <div className="grid grid-cols-3 gap-6">
            {/* Notificaciones */}
            <div className="col-span-2 bg-[#1e293b] p-6 rounded-xl border border-[#334155]">
              <h3 className="text-lg font-semibold mb-4">Notificaciones</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-medium">
                    Actualización del sistema programada
                  </p>
                  <p className="text-sm text-gray-400">
                    El mantenimiento se realizará el 25 de Diciembre a las 10 PM.
                  </p>
                </div>
                <div className="border-t border-[#334155] pt-4">
                  <p className="font-medium">Nueva factura disponible</p>
                  <p className="text-sm text-gray-400">
                    Tu factura de Noviembre ya está lista para descargar.
                  </p>
                </div>
                <div className="border-t border-[#334155] pt-4">
                  <p className="font-medium">Recordatorio de reunión</p>
                  <p className="text-sm text-gray-400">
                    Tienes una reunión de equipo hoy a las 3 PM.
                  </p>
                </div>
                <a
                  href="#"
                  className="block text-blue-500 text-sm mt-4 hover:underline"
                >
                  Ver todas las notificaciones
                </a>
              </div>
            </div>

            {/* Accesos Directos */}
            <div className="bg-[#1e293b] p-6 rounded-xl border border-[#334155]">
              <h3 className="text-lg font-semibold mb-4">Accesos Directos</h3>
              <div className="flex flex-col space-y-3">
                <button className="bg-[#3b82f6] hover:bg-blue-600 text-white py-2 rounded-md">
                  Crear Nuevo Proyecto
                </button>
                <button className="bg-[#334155] text-gray-300 py-2 rounded-md">
                  Añadir Tarea
                </button>
                <button className="bg-[#334155] text-gray-300 py-2 rounded-md">
                  Invitar Miembro
                </button>
                <button className="bg-[#334155] text-gray-300 py-2 rounded-md">
                  Generar Reporte
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
