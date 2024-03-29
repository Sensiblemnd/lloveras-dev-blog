type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <picture>
        <img src={picture} className="w-12 h-12 mr-4 rounded-full" alt={name} />
      </picture>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar
