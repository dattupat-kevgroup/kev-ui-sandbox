import { seedFormPages, seedSavedFormData, seedFormSubmissions } from './data/form';
import type { FormPageMeta, SavedFormData, FormSubmission } from './data/form';
import { seedComboboxOptions } from './data/combobox';
import type { ComboboxOption } from './data/combobox';
import { seedChipTags } from './data/chip';
import type { ChipTag } from './data/chip';
import { seedListItems } from './data/list';
import type { ListItem } from './data/list';
import { seedDropdownOptions, seedSelectedOptions } from './data/dropdown';
import type { DropdownOption, SelectedOption } from './data/dropdown';
import { seedIcons } from './data/icons';
import type { IconMeta } from './data/icons';
import { seedButtonConfigs, seedNotificationSummary, seedUserProfile } from './data/button';
import type { ButtonConfig, NotificationSummary, UserProfile } from './data/button';
import { seedContentBlocks } from './data/typography';
import type { ContentBlock } from './data/typography';
import { seedNotifications } from './data/drawer';
import type { Notification } from './data/drawer';
import { seedNavItems, seedNavLinks } from './data/scaffolding';
import type { NavItem, NavLink } from './data/scaffolding';
import { seedUtilities } from './data/jsUtils';
import type { UtilityMeta } from './data/jsUtils';
import { seedDashboardStats } from './data/home';
import type { DashboardStats } from './data/home';

function createMapStore<T extends { id: string }>(seed: T[]) {
  const store = new Map<string, T>(seed.map((item) => [item.id, item]));

  return {
    getAll: () => Array.from(store.values()),
    getById: (id: string) => store.get(id) ?? null,
    create: (data: Omit<T, 'id'>) => {
      const item = { id: crypto.randomUUID(), ...data } as T;
      store.set(item.id, item);
      return item;
    },
    update: (id: string, data: Partial<T>) => {
      const existing = store.get(id);
      if (!existing) return null;
      const updated = { ...existing, ...data };
      store.set(id, updated);
      return updated;
    },
    delete: (id: string) => store.delete(id),
    reset: () => {
      store.clear();
      seed.forEach((item) => store.set(item.id, item));
    },
  };
}

// Singleton stores for simple values
function createSingletonStore<T>(seed: T) {
  let value = structuredClone(seed);
  return {
    get: () => structuredClone(value),
    set: (newValue: T) => { value = structuredClone(newValue); },
    update: (partial: Partial<T>) => { value = { ...value, ...partial }; return structuredClone(value); },
    reset: () => { value = structuredClone(seed); },
  };
}

export const db = {
  formPages: createMapStore<FormPageMeta>(seedFormPages),
  savedFormData: createMapStore<SavedFormData>(seedSavedFormData),
  formSubmissions: createMapStore<FormSubmission>(seedFormSubmissions),
  comboboxOptions: createMapStore<ComboboxOption>(seedComboboxOptions),
  chipTags: createMapStore<ChipTag>(seedChipTags),
  listItems: createMapStore<ListItem>(seedListItems),
  dropdownOptions: createMapStore<DropdownOption>(seedDropdownOptions),
  selectedOptions: createMapStore<SelectedOption>(seedSelectedOptions),
  icons: createMapStore<IconMeta>(seedIcons),
  buttonConfigs: createMapStore<ButtonConfig>(seedButtonConfigs),
  contentBlocks: createMapStore<ContentBlock>(seedContentBlocks),
  notifications: createMapStore<Notification>(seedNotifications),
  navItems: createMapStore<NavItem>(seedNavItems),
  navLinks: createMapStore<NavLink>(seedNavLinks),
  notificationSummary: createSingletonStore<NotificationSummary>(seedNotificationSummary),
  userProfile: createSingletonStore<UserProfile>(seedUserProfile),
  utilities: createMapStore<UtilityMeta>(seedUtilities),
  dashboardStats: createSingletonStore<DashboardStats>(seedDashboardStats),

  resetAll: () => {
    db.formPages.reset();
    db.savedFormData.reset();
    db.formSubmissions.reset();
    db.comboboxOptions.reset();
    db.chipTags.reset();
    db.listItems.reset();
    db.dropdownOptions.reset();
    db.selectedOptions.reset();
    db.icons.reset();
    db.buttonConfigs.reset();
    db.contentBlocks.reset();
    db.notifications.reset();
    db.navItems.reset();
    db.navLinks.reset();
    db.notificationSummary.reset();
    db.userProfile.reset();
    db.utilities.reset();
    db.dashboardStats.reset();
  },
};
