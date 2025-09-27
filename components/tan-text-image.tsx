import Image from 'next/image'

interface TanTextImageProps {
  src: string
  alt: string
  className?: string
}

const TanTextImage = ({ src, alt, className = "" }: TanTextImageProps) => {
  return (
    <div className={`inline-block ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={400}
        height={100}
        className="h-auto w-auto max-w-full"
        priority
      />
    </div>
  )
}

export default TanTextImage
