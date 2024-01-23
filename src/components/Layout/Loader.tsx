import { BoxProps, Center, Loader as MantineLoader } from "@mantine/core"

// prevent flash
export const Loader = ({ h = "100%", ...rest }: BoxProps) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true)
    }, 350)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) {
    return null
  }

  return (
    <Center h={h} {...rest}>
      <MantineLoader size={50} />
    </Center>
  )
}
