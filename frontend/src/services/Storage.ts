class StorageService {
  public setItem = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  public getItem = <T>(key: string): T | null => {
    const data: string | null = localStorage.getItem(key);

    if (data !== null) {
      return JSON.parse(data);
    }

    return null;
  };

  public removeItem = (key: string): void => {
    localStorage.removeItem(key);
  };

  public clearAll = (): void => {
    localStorage.clear();
  };
}

export default new StorageService();
