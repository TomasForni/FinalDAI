USE [FinalDAIdb]
GO
/****** Object:  Table [dbo].[Preguntas]    Script Date: 02/12/2023 19:52:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Preguntas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Pregunta] [varchar](255) NULL,
	[Respuesta01] [varchar](255) NULL,
	[Respuesta02] [varchar](255) NULL,
	[Respuesta03] [varchar](255) NULL,
	[Respuesta04] [varchar](255) NULL,
	[RespuestaCorrecta] [int] NULL,
	[FechaCreacion] [datetime] NULL,
 CONSTRAINT [PK_Preguntas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Preguntas] ON 

INSERT [dbo].[Preguntas] ([Id], [Pregunta], [Respuesta01], [Respuesta02], [Respuesta03], [Respuesta04], [RespuestaCorrecta], [FechaCreacion]) VALUES (1, N'Cuál es el mar/lago más grande del mundo?', N'Lago superior', N'Mar Caspio', N'Lago Hurón', N'Lago Michigan', 2, CAST(N'2023-12-10T12:36:27.960' AS DateTime))
INSERT [dbo].[Preguntas] ([Id], [Pregunta], [Respuesta01], [Respuesta02], [Respuesta03], [Respuesta04], [RespuestaCorrecta], [FechaCreacion]) VALUES (2, N'Cuál es la montaña más alta del mundo?', N'Monte Everest', N'K2', N'Kanchenjunga', N'Lhotse', 1, CAST(N'2023-01-16T22:56:37.360' AS DateTime))
INSERT [dbo].[Preguntas] ([Id], [Pregunta], [Respuesta01], [Respuesta02], [Respuesta03], [Respuesta04], [RespuestaCorrecta], [FechaCreacion]) VALUES (3, N'Cuál es el país más grande del mundo?', N'Canadá', N'Estados Unidos', N'Rusia', N'China', 3, CAST(N'2023-02-03T05:46:37.950' AS DateTime))
INSERT [dbo].[Preguntas] ([Id], [Pregunta], [Respuesta01], [Respuesta02], [Respuesta03], [Respuesta04], [RespuestaCorrecta], [FechaCreacion]) VALUES (4, N'Cuál es el país más pequeño del mundo?', N'Nauru', N'Mónaco', N'Tuvalu', N'Vaticano', 4, CAST(N'2023-09-25T15:26:57.160' AS DateTime))
SET IDENTITY_INSERT [dbo].[Preguntas] OFF
GO
