
import { useContext } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { SneckbarProvider, SneckbarContext } from "../../lib"

const meta: Meta = {
  title: "Components/Other/Sneckbar",
  component: SneckbarProvider,
}
export default meta
type Story = StoryObj

const DemoComponent = () => {
  const { showSnackbar } = useContext(SneckbarContext)

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() =>
          showSnackbar("This is a snackbar from context",{
            buttonText: "Undo",
            onClick: () => alert("Undo clicked"),
            closeButton: true,
          })
        }
      >
        Show Snackbar
      </button>
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <SneckbarProvider>
      <DemoComponent />
    </SneckbarProvider>
  ),
}
