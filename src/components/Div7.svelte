<script>
  let certificates = [
    {
      link: "https://www.coursera.org/account/accomplishments/verify/0C2E5AE6KON7",
      title: "Introduction to Software Engineering",
    },
    {
      link: "https://www.hackerrank.com/certificates/iframe/09c8e1a95847",
      title: "Node.js (Basic) Skills",
    },
    {
      link: "https://www.coursera.org/account/accomplishments/verify/MYOCO9RV5ORD",
      title: "Introduction to Big Data",
    },
    {
      link: "https://www.udemy.com/certificate/UC-9540d330-4473-416f-a729-6dc488179b4c/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
      title: "JavaScript for Beginners: The Complete Course for Beginners",
    },
    {
      link: "https://www.credly.com/badges/eb92e335-55a4-40fa-a849-50c1e9964767/public_url",
      title: "Introduction to Cybersecurity",
    },
  ];
</script>

<main class="p-5">
  <h1 class="text-white text-xl font-semibold mb-4">Certificates</h1>
  <ul class="list-disc pl-5 leading-7">
    {#each certificates as certificate}
      <li>
        <a
          href={certificate.link}
          class="font-extralight hover:underline"
          target="_blank"
        >
          <span>{certificate.title}</span>
        </a>
      </li>
    {/each}
  </ul>
</main>
