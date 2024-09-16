// See https://observablehq.com/framework/config for documentation.

const head = `
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
<link rel="manifest" href="/assets/site.webmanifest">
`;

export default {
  title: "2024 Miller Introduction",
  head: head,
  root: "src",
  pages: [
    { name: "Inverse Scattering Problem", path: "inverse-scattering-problem" },
    { name: "Proximal Gradient Methods", path: "proximal-gradient-methods" },
    { name: "Iterative Ptychography", path: "iterative-ptychography" },
    { name: "About This Presentation", path: "about" },
  ],
};
