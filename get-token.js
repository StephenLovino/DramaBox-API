import axios from "axios";

// get a token
const token = async () => {
    try {
        // If you want to buy the source code (auto-generate token), visit: https://lynk.id/sansekai/mxd6j2ezmxoe
        // Note: the token generation API may be turned off at any time without prior notice.
        const res = await axios.get("https://dramabox-token.vercel.app/token");
        return res.data;
    } catch (error) {
        throw error;
    }
}

export { token };
export default { token };
