This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# r3f-showcase

```tsx


 transmission?: number
  /* Thickness (refraction), default: 0 */
  thickness?: number
  /** Backside thickness (when backside is true), default: 0 */
  backsideThickness?: number
  /* Roughness (blur), default: 0 */
  roughness?: number
  /* Chromatic aberration, default: 0.03 */
  chromaticAberration?: number
  /* Anisotropy, default: 0.1 */
  anisotropicBlur?: number
  /* Distortion, default: 0 */
  distortion?: number
  /* Distortion scale, default: 0.5 */
  distortionScale?: number
  /* Temporal distortion (speed of movement), default: 0.0 */
  temporalDistortion?: number
  /** The scene rendered into a texture (use it to share a texture between materials), default: null  */
  buffer?: THREE.Texture
  /** transmissionSampler, you can use the threejs transmission sampler texture that is
   *  generated once for all transmissive materials. The upside is that it can be faster if you
   *  use multiple MeshPhysical and Transmission materials, the downside is that transmissive materials
   *  using this can't see other transparent or transmissive objects nor do you have control over the
   *  buffer and its resolution, default: false */
  transmissionSampler?: boolean
  /** Render the backside of the material (more cost, better results), default: false */
  backside?: boolean
  /** Resolution of the local buffer, default: undefined (fullscreen) */
  resolution?: number
  /** Resolution of the local buffer for backfaces, default: undefined (fullscreen) */
  backsideResolution?: number
  /** Refraction samples, default: 6 */
  samples?: number
  /** Buffer scene background (can be a texture, a cubetexture or a color), default: null */
  background?: THREE.Texture
}



```

transmission?: number
/_Thickness (refraction), default: 0_/
thickness?: number
/**Backside thickness (when backside is true), default: 0 _/
backsideThickness?: number
/_ Roughness (blur), default: 0 _/
roughness?: number
/_ Chromatic aberration, default: 0.03 _/
chromaticAberration?: number
/_ Anisotropy, default: 0.1 _/
anisotropicBlur?: number
/_ Distortion, default: 0 _/
distortion?: number
/_ Distortion scale, default: 0.5 _/
distortionScale?: number
/_ Temporal distortion (speed of movement), default: 0.0 \*/
temporalDistortion?: number
/** The scene rendered into a texture (use it to share a texture between materials), default: null \*/
buffer?: THREE.Texture
/\*\* transmissionSampler, you can use the threejs transmission sampler texture that is

- generated once for all transmissive materials. The upside is that it can be faster if you
- use multiple MeshPhysical and Transmission materials, the downside is that transmissive materials
- using this can't see other transparent or transmissive objects nor do you have control over the
- buffer and its resolution, default: false _/
  transmissionSampler?: boolean
  /\*\* Render the backside of the material (more cost, better results), default: false_/
  backside?: boolean
  /**Resolution of the local buffer, default: undefined (fullscreen) \*/
  resolution?: number
  /** Resolution of the local buffer for backfaces, default: undefined (fullscreen) _/
  backsideResolution?: number
  /\*\* Refraction samples, default: 6 _/
  samples?: number
  /\*_ Buffer scene background (can be a texture, a cubetexture or a color), default: null_/
  background?: THREE.Texture
  }
