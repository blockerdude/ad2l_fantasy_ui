import { User } from "../model/user";

export default class SessionStorageService {
    static instance: SessionStorageService;

    private userKey = "user"

    private constructor() {
        // console.log('here in structor user is', this.getUser())
    }

    public static getInstance(): SessionStorageService {
        if (!SessionStorageService.instance) {
            SessionStorageService.instance = new SessionStorageService()
        }
        return SessionStorageService.instance
    }

    public storeUser(user: User): void {
        window.sessionStorage.setItem(this.userKey, JSON.stringify(user))
    }

    public getUser(): User | null {
        const userStr = window.sessionStorage.getItem(this.userKey)
        if (!userStr) {
            return null
        }
        return JSON.parse(userStr)
    }

    public clearUser(): void {
        window.sessionStorage.removeItem(this.userKey)
    }
}