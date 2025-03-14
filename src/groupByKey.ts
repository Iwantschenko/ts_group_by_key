type GroupsMap<T> = {
  [key: string]: T[];
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resObj: GroupsMap<T> = {};

  for (const item of items) {
    if (!resObj[item[key] as string]) {
      resObj[item[key] as string] = [];
    }

    resObj[item[key] as string].push(item);
  }

  return resObj;
}
