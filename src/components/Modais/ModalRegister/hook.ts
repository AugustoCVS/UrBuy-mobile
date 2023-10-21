import { useToast} from 'native-base'

export const useModalRegister = () => {

    const toast = useToast()
    
    const showErrorToast = (title: string): void => {
        toast.show({
            title: title,
            duration: 3000,
            bgColor: "red.500",
            placement: "top",
        })
    }

    return {
        actions: {
            showErrorToast
        }
    }
}