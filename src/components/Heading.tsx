type HeadingProps = {
  title: string
  subtitle?: string
  center?: boolean
}

export const Heading = ({ title, subtitle, center }: HeadingProps) => (
  <hgroup>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </hgroup>
);