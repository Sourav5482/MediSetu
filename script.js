   const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

  const doctorsInfo = [
   
    {
      image: 'https://media.istockphoto.com/id/1826004997/photo/young-indian-pregnant-woman-with-female-doctor-examining-and-listening-babys-heartbeat-using.jpg?s=1024x1024&w=is&k=20&c=Pk8xqEtE4ucPj6HAzQVnu7oSs6Wcz3OXuLOX4K4pGaM=',
      title: 'Gynecologist',
      desc: 'Explore for women’s health, pregnancy and infertility treatments'
    },
     {
      image: 'https://deshbhagatuniversity.in/wp-content/uploads/2024/07/2149206225.jpg',
      title: 'dentist',
      desc: 'Teething troubles? Schedule a dental checkup'
    },
    {
      image: 'https://media.istockphoto.com/id/1473335158/photo/female-nutritionist-holding-image-of-healthy-eating-plate.jpg?s=1024x1024&w=is&k=20&c=Dso1aCkoeJggEFxj8Gm963RiQmXmtDZISXGgqT4DdYU=',
      title: 'Dietitian/Nutrition',
      desc: 'Get guidance on eating right, weight management and sports nutrition'
    },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLjTRqyhkg13XLnjKdXV3JH-8KIcU8lD-LQ&s',
    title: 'Dermatologist',
    desc: 'Skin issues? Get help with acne, allergies, and more.'
  },
  {
    image: 'https://medical.rossu.edu/sites/g/files/krcnkv261/files/styles/atge_3_2_crop_md/public/2022-04/Pediatrician.jpg?h=f9d06ff2&itok=RIN6zAjk',
    title: 'Pediatrician',
    desc: 'Specialized care for babies, children, and teens.'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRnDY8kgw64nlMsvIRSvJqthh6BTEyGn9UgQ&s',
    title: 'Orthopedic',
    desc: 'Bone, joint, and spine-related treatments and surgeries.'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9tyFoYnTM-kO1kU0lTGPuPX0EV4Su8y6mSg&s',
    title: 'Cardiologist',
    desc: 'Heart checkup and treatment for cardiac conditions.'
  },
  {
    image: 'https://www.logansportmemorial.org/wp-content/uploads/what-does-a-neurologist-do.jpg',
    title: 'Neurologist',
    desc: 'Brain and nervous system disorders diagnosis and care.'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83rEevHG81UXyUWULMAjSQ792iE7TgMRRzg&s',
    title: 'Psychiatrist',
    desc: 'Mental health support for depression, anxiety, and more.'
  },
  {
    image: 'https://thefamilytreehospital.com/wp-content/uploads/sites/13/2023/08/general-physician-1.jpg',
    title: 'General Physician',
    desc: 'Treatment for common illnesses and health checkups.'
  },
  {
    image: 'https://www.renaimedicity.org/wp-content/uploads/2021/03/urology-inn.jpg',
    title: 'Urologist',
    desc: 'Bladder, kidney, and urinary tract-related treatments.'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUpB7JV8Idztm8xVj8ElX7lAbS_ioMH2M1w&s',
    title: 'ENT Specialist',
    desc: 'Ear, nose, and throat issues diagnosis and care.'
  },
  {
    image: 'https://www.neovisioneyecenters.com/wp-content/uploads/2020/10/neovision-october-2020-1-jpg.webp',
    title: 'Ophthalmologist',
    desc: 'Eye checkups, vision issues, and cataract treatments.'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzct7P5INLY26FSzzGqBUCDUsvGg8DZstVKg&s',
    title: 'Oncologist',
    desc: 'Cancer diagnosis, therapy, and medical consultations.'
  },  {
    image: 'https://physiosynapse.com/wp-content/uploads/2021/10/Enfield-Physiotherapy.jpg',
    title: 'Physiotherapist',
    desc: 'Treat muscle injuries and improve physical mobility.'
  },

    
  ];

  const container = document.getElementById('cardContainer');

  doctorsInfo.forEach(doctor => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${doctor.image}" alt="${doctor.title}">
      <div class="card-content">
        <h3>${doctor.title}</h3>
        <p>${doctor.desc}</p>
      </div>
    `;
   container.appendChild(card);
   card.addEventListener('click', () => {
    // Only these pages exist
    const existingPages = ["dentist", "gynecologist", "cardiologist"];
    const formattedTitle = doctor.title.toLowerCase().replace(/[^a-z]/gi, "");

    if (existingPages.includes(formattedTitle)) {
      const capitalized = formattedTitle.charAt(0).toUpperCase() + formattedTitle.slice(1);
      window.location.href = `/Component/${capitalized}.html`;
    } else {
      window.location.href = "/coming-soon.html";
    }
  });

  });

