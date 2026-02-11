interface BaseEntity {
  id: string;
  name: string;
  email: string;
  password: string;
}

function createInMemoryDatabase<T extends BaseEntity>() {
  const data = new Map<string, T>();

  return {
    create(item: T): T {
      data.set(item.id, item);
      return item;
    },

    findById(id: string): T | undefined {
      return data.get(id);
    },

    findByEmail(email: string): T | undefined {
      return Array.from(data.values()).find(
        item => item.email === email
      );
    },

    findAll(): T[] {
      return Array.from(data.values());
    },

    update(id: string, updates: Partial<T>): T | null {
      const existing = data.get(id);
      if (!existing) return null;

      const updated = { ...existing, ...updates };
      data.set(id, updated);
      return updated;
    },

    delete(id: string): boolean {
      return data.delete(id);
    },

    clear(): void {
      data.clear();
    }
  };
}

export default createInMemoryDatabase;