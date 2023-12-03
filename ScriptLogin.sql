USE [master]
GO
--
-- 
--

IF NOT EXISTS (SELECT * FROM sys.server_principals WHERE [name] = N'Preguntas')
BEGIN
	PRINT 'Creando Login'
	CREATE LOGIN [Preguntas] WITH 
		PASSWORD=N'evaluacion', 
		DEFAULT_DATABASE=[FinalDAIdb], 
		CHECK_EXPIRATION=OFF, 
		CHECK_POLICY=OFF
END
GO

USE [FinalDAIdb]
IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE [name] = N'Preguntas')
BEGIN
	PRINT 'Creando User'
	CREATE USER [Preguntas] FOR LOGIN [Preguntas]
	ALTER ROLE [db_owner] ADD MEMBER [Preguntas]
END 
GO