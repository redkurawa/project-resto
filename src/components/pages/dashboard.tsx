// Dashboard.tsx

import { useAppSelector } from '@/redux/hooks';
// import { useAppSelector } from './hooks'; // Import hook kustom

const Dashboard = () => {
  // Ambil user dan token dari state Redux
  const { user, token } = useAppSelector((state) => state.auth);

  if (!user) {
    // Jika user tidak ada (belum login), tampilkan pesan atau arahkan ke halaman login
    return (
      <div>
        <p>Silakan login terlebih dahulu untuk mengakses halaman ini.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Selamat Datang, {user.name}!</h2>
      <p>Email Anda: {user.email}</p>
      <p>ID Pengguna: {user.id}</p>
      <p>Token Anda: {token}</p>

      {/* Di sini Anda bisa menggunakan 'token' untuk memanggil API lain */}
      <button onClick={() => console.log('Menggunakan token untuk API lain.')}>
        Panggil API Terlindungi
      </button>
    </div>
  );
};

export default Dashboard;
