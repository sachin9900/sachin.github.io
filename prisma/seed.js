const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: 'Smart Agriculture Monitoring',
        category: 'IoT Projects',
        domain: 'Smart Farming',
        difficulty: 'Intermediate',
        description: 'A complete IoT solution for monitoring soil moisture and weather conditions with cloud dashboards.',
        techStack: 'ESP32, LoRa, MQTT, Azure IoT',
        features: ['Soil Moisture Monitoring', 'Cloud Visualization', 'Mobile Alerts'],
        image: 'smart-agriculture.jpg'
      },
      {
        title: 'Smart Energy Meter',
        category: 'IoT Projects',
        domain: 'Energy Management',
        difficulty: 'Advanced',
        description: 'Real-time energy monitoring with usage reports and remote dashboard access.',
        techStack: 'ESP32, AWS IoT, Power Sensors',
        features: ['Real-Time Monitoring', 'Consumption Reports', 'IoT Dashboard'],
        image: 'smart-energy-meter.jpg'
      }
    ]
  });

  await prisma.testimonial.createMany({
    data: [
      {
        name: 'Priya Sharma',
        role: 'Final Year Student',
        quote: 'The mentorship helped me build a high-quality industry-ready project.'
      },
      {
        name: 'Dr. R. N. Rao',
        role: 'HOD, Electronics',
        quote: 'Students were more confident and project reports were excellent.'
      }
    ]
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
