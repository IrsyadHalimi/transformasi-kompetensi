import { ThemeConcept, ConceptDetails, ValueItem, MilestoneItem, ServiceItem, LegalKBLI, PartnerItem, TeamMember, DocumentedActivity } from './types';

export const CONCEPTS: Record<ThemeConcept, ConceptDetails> = {
  corporate: {
    id: 'corporate',
    name: 'Executive Platinum',
    tagline: 'Sleek, Dynamic & Trustworthy',
    description: 'Menggunakan warna Premium Navy & Platinum Silver dengan desain korporat kelas atas. Layout yang bersih, terstruktur, serta profesional untuk institusi, BUMN, dan kementerian.',
    primaryColor: 'from-[#0F172A] to-[#1E3A8A]',
    fontHeading: 'font-sans font-bold tracking-tight',
    fontBody: 'font-sans text-slate-600',
    vibe: 'Sempurna untuk jajaran manajemen puncak, Kementerian, dan Dewan Direksi BUMN.'
  }
};

export const CORE_VALUES: ValueItem[] = [
  {
    icon: 'ShieldCheck',
    title: 'Value-Driven Excellence',
    description: 'Setiap kurikulum, bimbingan, dan konsultasi kami rancang untuk mendorong terciptanya dampak nyata bagi pengembangan kompetensi organisasi Anda.'
  },
  {
    icon: 'Award',
    title: 'Global Standardization',
    description: 'Mengintegrasikan standar global ke dalam kompetensi nasional berdasarkan kurikulum berlisensi yang resmi dan terakreditasi.'
  },
  {
    icon: 'TrendingUp',
    title: 'Adaptive Learning',
    description: 'Menyediakan metode pembelajaran yang responsif terhadap percepatan digitalisasi dan perkembangan teknologi mutakhir.'
  },
  {
    icon: 'Users',
    title: 'Collaborative Ecosystem',
    description: 'Membangun sinergi yang berkelanjutan antara individu, institusi pendidikan resmi, dan dunia industri profesional.'
  }
];

export const TIMELINE_MILESTONES: MilestoneItem[] = [
  {
    year: '2026',
    title: 'Fondasi & Operasional',
    description: 'Aktivasi penuh Tempat Uji Kompetensi (TUK) dan Lembaga Pelatihan Kerja (LPK) untuk membangun fondasi operasional perusahaan dengan target pendapatan Rp1,20 Miliar.',
    metrics: { label: 'Target Pendapatan', value: 'Rp 1.20 Miliar' }
  },
  {
    year: '2027',
    title: 'Ekspansi Spesialisasi',
    description: 'Pembentukan PT Teknik Welding Indonesia sebagai unit spesialis serta pengembangan program pendampingan kewirausahaan berbasis kompetensi.',
    metrics: { label: 'Unit Spesialis', value: 'PT Teknik Welding Indo' }
  },
  {
    year: '2028',
    title: 'Transformasi Korporasi',
    description: 'Transformasi menjadi grup perusahaan holding yang bergerak di bidang konsultasi, pengembangan kompetensi, serta investasi strategis.',
    metrics: { label: 'Struktur Baru', value: 'Holding Group (Grup Perusahaan)' }
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'pengelasan',
    title: 'SKEMA PENGELASAN',
    description: 'Program pelatihan, pendampingan sertifikasi profesional dibidang pengelasan (Welding) berstandar nasional dan industri manufaktur terpadu.',
    icon: 'Briefcase',
    badge: 'Skema Utama',
    features: [
      'Pelatihan Las SMAW 1G hingga 3G/4G',
      'Sertifikasi Las Pelat & Pipa (Plate & Pipe Welder)',
      'Pelatihan Inspektur Las (Welding Inspector)',
      'Kemitraan Praktik Kerja TUK Las Terlisensi',
      'Standar Keselamatan Kerja Welding K3 Terakreditasi'
    ]
  },
  {
    id: 'it',
    title: 'SKEMA TEKNIK INFORMASI',
    description: 'Penguatan kompetensi literasi digital, pemrograman, tata kelola infrastruktur IT, keamanan sistem informasi, serta integrasi teknologi modern.',
    icon: 'Cpu',
    badge: 'Skema Utama',
    features: [
      'Pelatihan Rekayasa Perangkat Lunak (Software Developer)',
      'Sertifikasi Kompetensi Analisis Data & Big Data',
      'Tata Kelola Keamanan Jaringan dan Cyber Security',
      'Penyusunan Kurikulum Literasi AI & Otomasi Kantor',
      'Asesmen Sertifikasi Keahlian TI berskala Industri'
    ]
  },
  {
    id: 'pertambangan',
    title: 'SKEMA PERTAMBANGAN',
    description: 'Penyusunan kapabilitas teknis operasional pertambangan, keselamatan dan kesehatan kerja pertambangan, serta tata kelola lingkungan hidup.',
    icon: 'Compass',
    badge: 'Skema Utama',
    features: [
      'Kualifikasi Diklat POP (Pengawas Operasional Pratama)',
      'Sertifikasi Keselamatan Pertambangan Resmi (K3)',
      'Pelatihan Teknik Pengukuran dan Pemetaan Lokasi',
      'Manajemen Kepatuhan Regulasi Lingkungan Mineral Batubara',
      'Bimbingan Kompetensi Teknis Lapangan Tambang Terapan'
    ]
  },
  {
    id: 'sdm',
    title: 'SKEMA SUMBER DAYA MANUSIA',
    description: 'Pengembangan kapasitas kepemimpinan, manajemen talenta, administrasi personalia, serta penyelarasan standarisasi profesi berdasarkan SKKNI.',
    icon: 'FileCheck',
    badge: 'Skema Utama',
    features: [
      'Sertifikasi Staf & Manajer MSDM berskala SKKNI Resmi',
      'Analisis Kebutuhan Diklat (TNA - Training Needs Analysis)',
      'Pelatihan Kepemimpinan Eksekutif dan Supervisor',
      'Pemetaan Kompetensi dan Evaluasi Kinerja (KPI & Key Results)',
      'Penyusunan Kamus Kompetensi Korporat Struktur Gaji'
    ]
  }
];

export const OTHER_SERVICES = [
  {
    title: 'Konsultan Bisnis',
    desc: 'Tata kelola manajemen, keuangan, pemasaran, SDM, IT, dan operasional. Strategi pertumbuhan bisnis dan optimalisasi operasional yang terukur.',
    icon: 'Briefcase'
  },
  {
    title: 'Lembaga Pelatihan Kerja (LPK)',
    desc: 'Pelatihan Teknis, Soft Skill, dan Kewirausahaan yang terkurasi. Kesiapan kerja tinggi dengan pengakuan kompetensi formal.',
    icon: 'BookOpen'
  },
  {
    title: 'Assessment Center',
    desc: 'Seleksi karyawan, pemetaan potensi (Talent Mapping), dan pengembangan karir. Strategi organisasi yang tepat dengan penempatan SDM sesuai keahlian.',
    icon: 'Award'
  }
];

export const LEGALITAS_DATA: LegalKBLI[] = [
  {
    code: '70201',
    title: 'Konsultasi Manajemen',
    description: 'Mencakup pemberian bantuan nasihat, bimbingan operasional usaha, penyusunan sistem kepersonaliaan, dan perencanaan strategi bisnis.',
    scope: 'Analisis kebutuhan kompetensi karyawan, restrukturisasi skema jenjang karir korporat, serta audit kelembagaan SDM.'
  },
  {
    code: '70209',
    title: 'Aktivitas Konsultasi Manajemen Lainnya',
    description: 'Pemberian saran operasional, perumusan manajemen keuangan bisnis, optimasi operasional organisasi, serta sistem pengawasan internal.',
    scope: 'Tata kelola manajemen korporasi, pendampingan kepatuhan prosedur mutu organisasi dan pengawasan efisiensi unit kerja.'
  },
  {
    code: '78300',
    title: 'Penyediaan Sumber Daya Manusia dan Manajemen Fungsi SDM',
    description: 'Jasa penyediaan tenaga kerja untuk ditempatkan pada perusahaan pengguna jasa dengan pengelolaan fungsi administratif manajemen secara penuh.',
    scope: 'Penyediaan jasa pengelolaan rekrutmen terstruktur, peningkatan kompetensi sebelum penempatan, serta penugasan operasional ahli.'
  },
  {
    code: '78101',
    title: 'Aktivitas Penempatan Tenaga Kerja Dalam Negeri',
    description: 'Aktivitas pendaftaran, seleksi, dan penempatan tenaga kerja dalam negeri di berbagai sektor industri.',
    scope: 'Penyelarasan profil kandidat karyawan dengan standar kompetensi kerja fungsional kebutuhan perusahaan klien domestik.'
  },
  {
    code: '78102',
    title: 'Aktivitas Penempatan Tenaga Kerja Luar Negeri',
    description: 'Pemenuhan standar pelatihan internasional dan administrasi karir bagi angkatan kerja Indonesia untuk penempatan luar negeri.',
    scope: 'Pembekalan sertifikasi global dan bahasa asing fungsional untuk memenuhi standar sertifikat internasional.'
  },
  {
    code: '78411',
    title: 'Pelatihan Kerja Pemerintah',
    description: 'Penyelenggaraan jasa pelatihan kerja fungsional oleh balai milik kementerian atau instansi pemerintah daerah.',
    scope: 'Sinergi fasilitasi Tempat Uji Kompetensi (TUK) pendukung aparatur sipil negara dan pilar instruktur kompetensi nasional.'
  },
  {
    code: '78421',
    title: 'Jasa Sertifikasi Profesi',
    description: 'Layanan pendaftaran, pengujian, pengawasan, serta pemberian surat lisensi keahlian/kompetensi untuk bidang profesi tertentu.',
    scope: 'Kemitraan pelaksanaan asesmen BNSP, penyusunan materi uji kompetensi (MUK), dan registrasi asesor berlisensi.'
  },
  {
    code: '78429',
    title: 'Pendidikan dan Pelatihan Kerja Lainnya Swasta',
    description: 'Pelatihan kerja fungsional non-pemerintah untuk penambahan keterampilan, produktivitas, serta pembentukan akhlak kewirausahaan.',
    scope: 'Kursus keterampilan khusus pemetaan karir teknis, keahlian las, pemrograman, pengawasan keselamatan lapangan.'
  },
  {
    code: '85492',
    title: 'Pendidikan Manajemen Swasta',
    description: 'Pendidikan manajemen fungsional, kepatuhan audit organisasi, kepemimpinan modern, administrasi bisnis strategis swasta.',
    scope: 'In-House Training pimpinan dewan direksi BUMN, kepemimpinan manajerial, bimbingan strategis tata kelola modal manusia.'
  },
  {
    code: '62019',
    title: 'Aktivitas Pemrograman Komputer Lainnya',
    description: 'Jasa analisis pemrograman aplikasi kustom fungsional, penulisan script kode, integrasi fungsional sistem informasi.',
    scope: 'Pembuatan platform digital, integrasi data rekapitulasi nilai ujian peserta, serta kustomisasi learning management system.'
  },
  {
    code: '62090',
    title: 'Aktivitas Teknologi Informasi dan Jasa Komputer Lainnya',
    description: 'Aktivitas perbaikan sistem komputer, konfigurasi jaringan data perusahaan, digitalisasi dokumentasi, dan integrasi hardware.',
    scope: 'Instalasi jaringan pendukung ujian berbasis komputer resmi, sertifikasi personil IT, dan instalasi simulator industri.'
  }
];

export const LEGAL_DOCS = [
  { label: 'Nama Lembaga Resmi', value: 'PT Transformasi Kompetensi Indonesia' },
  { label: 'Alamat Operasional', value: 'Jalan Salatiga Batu Benawa No 15 RT 042 Kelurahan Teluk Dalam, Banjarmasin Tengah, Banjarmasin, Kalimantan Selatan' },
  { label: 'Kontak WhatsApp Admin', value: '0821 9022 0027 (Admin)' },
  { label: 'Kontak WhatsApp Sales', value: '0822 5481 4752 (Marketing)' },
  { label: 'Email Resmi', value: 'pttransformasikompetensi@gmail.com' },
  { label: 'NIB (Nomor Induk Berusaha)', value: 'KBLI Multi-Sektor Terdaftar (Manajemen, IT, Las, Pertambangan)' },
  { label: 'Pencapaian Mutu', value: 'Sertifikasi Asesmen Berbasis Standard SKKNI Terintegrasi' }
];

export const STRATEGIC_ADVANTAGES = [
  {
    title: 'Fokus Internalisasi & Monitoring',
    badge: 'Pasca-Sertifikasi',
    desc: 'Kami tidak hanya memberikan pelatihan, tetapi juga melakukan monitoring terhadap implementasi kompetensi pasca-sertifikasi. Hal ini memastikan bahwa setiap peserta mampu menerapkan keahlian secara nyata dalam lingkungan kerja.'
  },
  {
    title: 'Ekosistem Terpadu',
    badge: 'Terintegrasi Penuh',
    desc: 'Kami menghadirkan ekosistem pengembangan kompetensi yang lengkap, mulai dari Tempat Uji Kompetensi (TUK), Lembaga Pelatihan Kerja (LPK), hingga pusat asesmen profesional yang terintegrasi secara dinamis.'
  },
  {
    title: 'Tim Ahli Tersertifikasi',
    badge: 'Asesor Profesional',
    desc: 'Didukung oleh instruktur resmi kementerian serta asesor profesional yang memiliki pengalaman luas dalam bidang teknis and manajemen, sehingga kualitas pelatihan dan asesmen tetap terjaga pada standar tertinggi.'
  }
];

export const SEGMENTS = [
  {
    title: 'Korporasi',
    metric: 'Skala & Mutu',
    desc: 'Membantu perusahaan menutup kesenjangan kompetensi tenaga kerja sekaligus memastikan pemenuhan standar regulasi dan sertifikasi yang berlaku di industri daerah.',
    focus: 'Pemenuhan Regulasi, Sertifikasi Profesi, Kompetensi Pegawai'
  },
  {
    title: 'Profesional',
    metric: 'Akselerasi Karir',
    desc: 'Meningkatkan nilai jual karier melalui penguatan kompetensi, pelatihan profesional fungsional, serta portofolio sertifikasi yang diakui secara resmi di tingkat nasional.',
    focus: 'Sertifikat Kompetensi, Pelatihan Praktis, Portofolio Formal'
  },
  {
    title: 'Institusi Pendidikan',
    metric: 'Penyelarasan SKKNI',
    desc: 'Mendukung institusi pendidikan dalam menyelaraskan kurikulum dengan standar kompetensi nasional (SKKNI) agar lulusan lebih siap memasuki dunia kerja.',
    focus: 'Link and Match Industri, Penyelarasan SKKNI, Kesiapan Kerja'
  }
];

export const PARTNERS: PartnerItem[] = [
  { name: 'LSP Transformasi MSDM', industry: 'Sertifikasi HR & Organisasi', logoType: 'triangle' },
  { name: 'LSP LAS', industry: 'Sertifikasi Pengelasan Industri', logoType: 'shield' },
  { name: 'LSP PMBE', industry: 'Sertifikasi K3 & Teknik Tambang', logoType: 'grid' },
  { name: 'LSP Teknologi Informasi Banua', industry: 'Sertifikasi Pemrograman & IT', logoType: 'star' },
  { name: 'LSP Instruktur Kompetensi Nasional', industry: 'Mutu Asesor & Pelatihan', logoType: 'chevron' }
];

export const DOCUMENTED_ACTIVITIES: DocumentedActivity[] = [
  {
    id: 'act-1',
    title: 'Praktik Uji Sertifikasi Pengelasan SMAW & Plate Welder',
    category: 'Skema Pengelasan',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop',
    description: 'Fasilitas kerja Tempat Uji Kompetensi (TUK) las untuk memastikan operator menguasai sambungan pipa industri beraliran tekanan tinggi dengan aman.',
    location: 'Banjarmasin, Kalimantan Selatan'
  },
  {
    id: 'act-2',
    title: 'Asesmen Pemetaan Talenta & Diklat Kompetensi MSDM Aparatur',
    category: 'Skema Sumber Daya Manusia',
    date: 'Mei 2026',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop',
    description: 'Penyusunan kamus kompetensi kepemimpinan dan asesmen psikometri untuk memetakan penempatan fungsional tenaga kerja.',
    location: 'Banjarmasin, Indonesia'
  },
  {
    id: 'act-3',
    title: 'In-House Training & Lokakarya Jaringan Keamanan Siber (IT Class)',
    category: 'Skema Teknik Informasi',
    date: 'Maret 2026',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
    description: 'Bimbingan teknis integrasi cloud computing, enkripsi data, dan langkah mitigasi kebocoran database operasional organisasi kementerian.',
    location: 'TUK IT Banua'
  },
  {
    id: 'act-4',
    title: 'Pelatihan POP & Diklat Keselamatan K3 Pertambangan Batubara',
    category: 'Skema Pertambangan',
    date: 'Februari 2026',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop',
    description: 'Pembekalan materi Pengawas Operasional Pratama (POP) dan audit kepatuhan lingkungan hidup di areal site penambangan mineral.',
    location: 'Kalimantan Selatan'
  }
];

export const LEADERS: TeamMember[] = [
  {
    name: 'Retno Listiyanti, S.Psi., M.M., CHRMP.',
    role: 'Direktur Kemitraan & SDM',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    quote: 'Mencetak SDM unggul berdaya saing global membutuhkan perpaduan harmonis antara kurikulum SKKNI yang disiplin dan kesadaran empati moral yang tulus. Kami hadir di Banjarmasin untuk memastikan seluruh talenta Indonesia siap bertransformasi maju.',
    bgGrad: 'from-blue-900 to-[#1E3A8A]'
  },
  {
    name: 'Ahmad Sofyan, S.T., M.T., Welding Specialist',
    role: 'Asesor Teknis Utama & Kepala LPK',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop',
    quote: 'Implementasi standardisasi keterampilan tidak hanya soal selembar sertifikat lulus uji, melainkan jaminan bahwa di lapangan kerja sesungguhnya, setiap pilar prosedur keselamatan dan presisi teknis dieksekusi tanpa cela.',
    bgGrad: 'from-teal-900 to-[#0F172A]'
  }
];
