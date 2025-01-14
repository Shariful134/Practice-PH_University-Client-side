const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "dsadhf",
  },
  {
    name: "User Manegement",
    Children: [
      {
        name: "Create Student",
        path: "create-student",
        element: "dfsghj",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "hdsgf",
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: "yhjas",
      },
    ],
  },
];

const adminRoutes = adminPaths2.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, []);

console.log(adminRoutes);

// const newArray = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.Children) {
//     item.Children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);

// console.log(newArray);
