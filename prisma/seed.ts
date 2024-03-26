import { encrypt } from '../src/utils/bcrypt.util'
import { prisma } from './db'

async function main (): Promise<void> {
  // Create role
  const adminRole = await prisma.role.create({
    data: {
      name: 'Admin'
    }
  })

  const passwordHash = await encrypt('admin')
  // Create user
  await prisma.user.create({
    data: {
      name: 'Admin User',
      username: 'admin',
      email: 'admin@test.com',
      password: passwordHash,
      roles: {
        connect: { id: adminRole.id } // Connect the user to the admin role
      }
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
