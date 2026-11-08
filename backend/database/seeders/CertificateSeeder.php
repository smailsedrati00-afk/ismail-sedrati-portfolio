<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Certificate;

class CertificateSeeder extends Seeder
{
    public function run(): void
    {
        Certificate::create([
            'title' => 'Python Essentials 1',
            'issuer' => 'Cisco Networking Academy',
            'date' => '10 Jun 2025',
            'credential_id' => 'CERT-PYTHON-01',
            'image' => '/assets/aistudio/image_0e85c44c.png',
            'verification_url' => '/assets/aistudio/certificate_python_4294bf27.pdf',
        ]);

        Certificate::create([
            'title' => 'Front-End Development With Distinction',
            'issuer' => 'Science of Apps',
            'date' => '01 Nov 2026',
            'credential_id' => 'SOA-FED-9YMK-A3GK',
            'image' => '/assets/aistudio/image_e7bddc93.png',
            'verification_url' => '/assets/aistudio/certificate_frond-end_77d75a1c.pdf',
        ]);

        Certificate::create([
            'title' => 'Back-End Development With Distinction',
            'issuer' => 'Science of Apps',
            'date' => '01 Nov 2026',
            'credential_id' => 'SOA-BED-8YJM-QPS8',
            'image' => '/assets/aistudio/image_e86691ab.png',
            'verification_url' => '/assets/aistudio/certificate_back_-_end_c061c0b4.pdf',
        ]);

        Certificate::create([
            'title' => 'JavaScript Essentials 1',
            'issuer' => 'Cisco Networking Academy & JS Institute',
            'date' => '01 Nov 2026',
            'credential_id' => '09265bf0-f5a9-44e4-9a51-b05c79559bf6',
            'image' => '/assets/aistudio/image_d7c1e45f.png',
            'verification_url' => '/assets/aistudio/certificate_-_javascripts_93d5a30d.pdf',
        ]);
    }
}