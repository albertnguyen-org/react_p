

const Hash = ({ value, type = "sha" }: { value: string, type?: string }): string => {

    switch (type) {
        case "md5":
            // TODO: Do something to hash with MD5
            return "";
        case "sha":
            // TODO: Do something to has with SHA
            return "";
        default: return value;
    }
    // return result;
}


/**
 * This functions use default to encrypt password
 * in case use it with normal string, please set `type`: 'text'
 * @param input 
 * @returns 
 */
const Encrypt = ({ data, type = "text" }: { data: string, type?: string }): string => {
    switch (type) {
        case "password": return data
        default: return data;
    }

}


export { Hash, Encrypt };
