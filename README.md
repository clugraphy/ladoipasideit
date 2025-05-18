[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcatalin-stroe%2Fsite)

# La Doi Pasi de IT Website

This is the repository for my personal website, La Doi Pasi de IT.

## Image Display Component

The website includes an ImageDisplay component that can be used in MDX files to display images with proper styling. To use it:

```jsx
import ImageDisplay from "./components/ImageDisplay";
import Image from "next/image";

<ImageDisplay>
  <Image
    src="/images/your-image.jpg"
    alt="Your image description"
    width={700}
    height={400}
    className="object-cover"
  />
</ImageDisplay>;
```

Make sure to add your images to the `/public/images/` directory.

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Personal Website

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)

## Running Locally

This application requires Node.js v18.17+.

```bash
git clone https://github.com/catalin-stroe/site.git
cd site
pnpm install
pnpm dev
```

## Docker Support

Build and run the application using Docker:

```bash
# Build the Docker image
docker build -t catalin-site .

# Run the container
docker run -p 3000:3000 catalin-site
```

## License & Credits

1. This project is based on [Lee Robinson's](https://github.com/leerob) personal website template.
2. You are free to use this code as inspiration.
3. Please do not copy it directly.
4. Crediting both the original author (Lee Robinson) and current maintainer (Catalin Stroe) is appreciated.

Please remove all of my personal information by running `
