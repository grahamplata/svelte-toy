export const readFromEnv = (id: string | number, defaultValue = "") => {
    if (import.meta.env[id] !== undefined) {
        return import.meta.env[id]
    }
    return defaultValue
}
