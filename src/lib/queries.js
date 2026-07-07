// GROQ queries. Each returns data shaped to match what the existing
// components already expect: image references are resolved to plain URL
// strings, and a couple of fields are aliased (e.g. description -> desc).

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  name,
  role,
  aboutText,
  resumeUrl,
  email,
  phone,
  birthday,
  location,
  socials,
  "avatar": avatar.asset->url
}`;

export const servicesQuery = `*[_type == "service"] | order(order asc){
  "id": _id,
  title,
  description,
  alt,
  "icon": icon.asset->url
}`;

export const skillsQuery = `*[_type == "skill"] | order(categoryOrder asc, order asc){
  "id": _id,
  name,
  alt,
  category,
  categoryOrder,
  order,
  "image": image.asset->url
}`;

export const projectsQuery = `*[_type == "project"] | order(order asc){
  "id": _id,
  title,
  category,
  "desc": description,
  alt,
  "download": coalesce(download, null),
  "live": coalesce(live, null),
  "repo": coalesce(repo, null),
  "video": coalesce(video, null),
  "images": images[].asset->url
}`;

export const achievementsQuery = `*[_type == "achievement"] | order(order asc){
  "id": _id,
  title,
  date,
  "desc": description,
  "images": images[].asset->url
}`;

export const educationQuery = `*[_type == "education"] | order(order asc){
  "id": _id,
  title,
  period,
  description,
  percentage
}`;

export const experienceQuery = `*[_type == "experience"] | order(order asc){
  "id": _id,
  title,
  period,
  workMode,
  location,
  description
}`;
